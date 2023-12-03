import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesScalarWhereInputSchema } from './PrivateEnergiesToTaskTemplatesScalarWhereInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutEnergyInputSchema;
