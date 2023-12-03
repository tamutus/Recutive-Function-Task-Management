import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';
import { EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesScalarWhereInputSchema } from './EnergiesToProjectTemplatesScalarWhereInputSchema';

export const EnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema;
