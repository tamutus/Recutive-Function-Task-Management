import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema;
