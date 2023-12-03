import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreateWithoutProjectInputSchema } from './EnergiesToProjectsCreateWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';
import { EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema } from './EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema';
import { EnergiesToProjectsCreateManyProjectInputEnvelopeSchema } from './EnergiesToProjectsCreateManyProjectInputEnvelopeSchema';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';

export const EnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema;
