import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema } from './PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsScalarWhereInputSchema } from './PrivateEnergiesToPrivateTagsScalarWhereInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutEnergyInputSchema).array(),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutEnergyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUpsertWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUpdateWithWhereUniqueWithoutEnergyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateManyWithoutEnergyNestedInputSchema;
