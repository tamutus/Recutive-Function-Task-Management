import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsScalarWhereInputSchema } from './EnergiesToTagsScalarWhereInputSchema';
import { EnergiesToTagsUpdateManyMutationInputSchema } from './EnergiesToTagsUpdateManyMutationInputSchema';
import { EnergiesToTagsUncheckedUpdateManyWithoutTagInputSchema } from './EnergiesToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const EnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTagsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema;
