import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateWithoutEnergyInputSchema } from './EnergiesToPersonsCreateWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';

export const EnergiesToPersonsCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPersonsCreateNestedManyWithoutEnergyInputSchema;
