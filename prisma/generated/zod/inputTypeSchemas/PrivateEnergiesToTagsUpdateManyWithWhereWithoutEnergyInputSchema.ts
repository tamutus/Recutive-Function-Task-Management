import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsScalarWhereInputSchema } from './PrivateEnergiesToTagsScalarWhereInputSchema';
import { PrivateEnergiesToTagsUpdateManyMutationInputSchema } from './PrivateEnergiesToTagsUpdateManyMutationInputSchema';
import { PrivateEnergiesToTagsUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTagsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsUpdateManyWithWhereWithoutEnergyInputSchema;
