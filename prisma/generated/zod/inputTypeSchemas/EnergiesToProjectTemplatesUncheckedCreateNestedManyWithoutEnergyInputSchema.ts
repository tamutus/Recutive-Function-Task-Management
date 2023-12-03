import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema } from './EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';

export const EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema;
