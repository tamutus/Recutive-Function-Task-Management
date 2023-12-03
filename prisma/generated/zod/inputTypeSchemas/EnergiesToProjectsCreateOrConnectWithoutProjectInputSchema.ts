import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsCreateWithoutProjectInputSchema } from './EnergiesToProjectsCreateWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';

export const EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema;
