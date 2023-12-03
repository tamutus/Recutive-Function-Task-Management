import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreateWithoutProjectInputSchema } from './EnergiesToProjectsCreateWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema';
import { EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema } from './EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema';
import { EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema } from './EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { EnergiesToProjectsCreateManyProjectInputEnvelopeSchema } from './EnergiesToProjectsCreateManyProjectInputEnvelopeSchema';
import { EnergiesToProjectsWhereUniqueInputSchema } from './EnergiesToProjectsWhereUniqueInputSchema';
import { EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema } from './EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { EnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema } from './EnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema';
import { EnergiesToProjectsScalarWhereInputSchema } from './EnergiesToProjectsScalarWhereInputSchema';

export const EnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.EnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectsCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToProjectsScalarWhereInputSchema),z.lazy(() => EnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectsUncheckedUpdateManyWithoutProjectNestedInputSchema;
