import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsWhereUniqueInputSchema } from './PrivateEnergiesToTagsWhereUniqueInputSchema';
import { PrivateEnergiesToTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToTagsCreateOrConnectWithoutEnergyInputSchema;
