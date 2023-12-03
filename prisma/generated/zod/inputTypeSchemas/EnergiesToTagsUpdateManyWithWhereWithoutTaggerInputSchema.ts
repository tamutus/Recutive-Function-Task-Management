import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsScalarWhereInputSchema } from './EnergiesToTagsScalarWhereInputSchema';
import { EnergiesToTagsUpdateManyMutationInputSchema } from './EnergiesToTagsUpdateManyMutationInputSchema';
import { EnergiesToTagsUncheckedUpdateManyWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedUpdateManyWithoutTaggerInputSchema';

export const EnergiesToTagsUpdateManyWithWhereWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyWithWhereWithoutTaggerInput> = z.object({
  where: z.lazy(() => EnergiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTagsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateManyWithoutTaggerInputSchema) ]),
}).strict();

export default EnergiesToTagsUpdateManyWithWhereWithoutTaggerInputSchema;
