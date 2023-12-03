import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateWithoutEnergyInputSchema } from './EnergiesToTagsCreateWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToTagsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToTagsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';

export const EnergiesToTagsCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTagsCreateNestedManyWithoutEnergyInputSchema;
