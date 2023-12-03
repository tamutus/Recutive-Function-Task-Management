import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsScalarWhereInputSchema } from './PrivateEnergiesToPrivateTagsScalarWhereInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema } from './PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema;
