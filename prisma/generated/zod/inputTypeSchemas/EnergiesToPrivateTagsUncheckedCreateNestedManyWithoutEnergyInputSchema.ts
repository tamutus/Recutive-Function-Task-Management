import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';

export const EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema;
