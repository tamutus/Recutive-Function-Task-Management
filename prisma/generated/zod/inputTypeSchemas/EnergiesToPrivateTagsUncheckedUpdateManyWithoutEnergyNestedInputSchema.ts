import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema } from './EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsScalarWhereInputSchema } from './EnergiesToPrivateTagsScalarWhereInputSchema';

export const EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyNestedInputSchema;
