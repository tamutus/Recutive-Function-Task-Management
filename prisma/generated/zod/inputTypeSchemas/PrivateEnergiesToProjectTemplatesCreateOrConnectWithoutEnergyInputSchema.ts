import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema;
