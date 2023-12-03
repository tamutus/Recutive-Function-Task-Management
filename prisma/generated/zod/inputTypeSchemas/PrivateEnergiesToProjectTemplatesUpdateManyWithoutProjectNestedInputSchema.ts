import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesScalarWhereInputSchema } from './PrivateEnergiesToProjectTemplatesScalarWhereInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema;
