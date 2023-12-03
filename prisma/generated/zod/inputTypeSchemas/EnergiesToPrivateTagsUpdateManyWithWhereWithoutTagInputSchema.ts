import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsScalarWhereInputSchema } from './EnergiesToPrivateTagsScalarWhereInputSchema';
import { EnergiesToPrivateTagsUpdateManyMutationInputSchema } from './EnergiesToPrivateTagsUpdateManyMutationInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema';

export const EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema;
