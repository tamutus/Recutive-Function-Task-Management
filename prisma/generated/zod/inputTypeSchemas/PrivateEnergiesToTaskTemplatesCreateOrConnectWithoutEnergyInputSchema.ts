import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema;
