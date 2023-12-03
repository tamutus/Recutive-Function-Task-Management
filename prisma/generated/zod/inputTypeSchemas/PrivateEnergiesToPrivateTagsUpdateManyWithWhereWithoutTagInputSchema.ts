import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsScalarWhereInputSchema } from './PrivateEnergiesToPrivateTagsScalarWhereInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema } from './PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutTagInputSchema;
