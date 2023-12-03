import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsScalarWhereInputSchema } from './PrivateEnergiesToTagsScalarWhereInputSchema';
import { PrivateEnergiesToTagsUpdateManyMutationInputSchema } from './PrivateEnergiesToTagsUpdateManyMutationInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsUpdateManyWithWhereWithoutTagInputSchema;
