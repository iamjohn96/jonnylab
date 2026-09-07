import { signalAnswers, type SignalAnswer } from "@/lib/signalAnswers";

const commonTerms = new Set([
  "a", "an", "and", "are", "can", "do", "does", "for", "how", "in", "is", "it", "my", "of", "on", "that", "the", "this", "to", "what", "when", "where", "why", "with", "you",
  "그", "서비스", "어떻게", "이", "저", "사용", "쓰",
]);

function normalizeTerm(term: string) {
  return term.replace(/(인가요|이에요|예요|은|는|이|가|을|를|에|도|으로|로|요)$/u, "");
}

function normalizeQuery(query: string) {
  return query
    .trim()
    .toLocaleLowerCase()
    .replace(/[’']/gu, "")
    .replace(/\bisnt\b/gu, "not")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function uniqueTerms(terms: string[]) {
  return [...new Set(terms)];
}

export function findSignalAnswers(query: string, answers: SignalAnswer[] = signalAnswers): SignalAnswer[] {
  const normalizedQuery = normalizeQuery(query);
  if (!normalizedQuery) return [];

  const rawTerms = normalizedQuery.split(" ").map(normalizeTerm).filter(Boolean);
  const meaningfulTerms = uniqueTerms(rawTerms.filter((term) => term.length > 1 && !commonTerms.has(term)));
  const phraseCandidates = uniqueTerms(
    rawTerms.flatMap((_, index) => [rawTerms.slice(index, index + 2).join(" "), rawTerms.slice(index, index + 3).join(" ")])
      .filter((phrase) => phrase.split(" ").length > 1),
  );

  return answers
    .map((answer) => {
      const keywords = answer.keywords.map(normalizeQuery);
      const searchable = normalizeQuery([answer.title, ...answer.keywords].join(" "));
      const strongPhraseMatch = searchable.includes(normalizedQuery) || phraseCandidates.some((phrase) => searchable.includes(phrase));
      const matchedTerms = meaningfulTerms.filter((term) => keywords.some((keyword) => keyword.includes(term)));
      const singleKeywordMatch = meaningfulTerms.length === 1 && keywords.includes(meaningfulTerms[0]);
      const isMatch = meaningfulTerms.length === 1
        ? singleKeywordMatch
        : strongPhraseMatch || matchedTerms.length >= 2;

      return { answer, score: (strongPhraseMatch ? 10 : 0) + matchedTerms.length, isMatch };
    })
    .filter(({ isMatch }) => isMatch)
    .sort((left, right) => right.score - left.score)
    .map(({ answer }) => answer);
}
