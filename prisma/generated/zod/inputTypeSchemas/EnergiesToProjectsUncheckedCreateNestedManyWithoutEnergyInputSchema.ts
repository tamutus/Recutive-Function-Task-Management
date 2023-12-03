import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreateWithoutEnergyInputSchema } from './EnergiesToProjectsCreateWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';

export const EnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema;
