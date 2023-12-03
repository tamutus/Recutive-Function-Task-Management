import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';

export const EnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema;
