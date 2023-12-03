import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema } from './EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToProjectTemplatesScalarWhereInputSchema } from './EnergiesToProjectTemplatesScalarWhereInputSchema';

export const EnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectTemplatesUpdateManyWithoutEnergyNestedInputSchema;
