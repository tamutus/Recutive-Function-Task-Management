import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereUniqueInputSchema } from './PrivateEnergiesToProjectsWhereUniqueInputSchema';
import { PrivateEnergiesToProjectsCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectsCreateOrConnectWithoutProjectInputSchema;
