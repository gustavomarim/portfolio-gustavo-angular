// Padronização de response de APIs,
// que recebem um tipo genérico devido a
// mutabilidade que as REST APIs recebem
// ao longo do tempo

export interface Response<T> {
contact: ReadonlyMap<unknown,unknown>;
  message?: string;
  data: T;
}
