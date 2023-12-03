import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateWithoutPersonInputSchema } from './EnergiesToPersonsCreateWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema';
import { EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema } from './EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema';
import { EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema } from './EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { EnergiesToPersonsCreateManyPersonInputEnvelopeSchema } from './EnergiesToPersonsCreateManyPersonInputEnvelopeSchema';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema } from './EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { EnergiesToPersonsUpdateManyWithWhereWithoutPersonInputSchema } from './EnergiesToPersonsUpdateManyWithWhereWithoutPersonInputSchema';
import { EnergiesToPersonsScalarWhereInputSchema } from './EnergiesToPersonsScalarWhereInputSchema';

export const EnergiesToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.EnergiesToPersonsUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToPersonsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToPersonsScalarWhereInputSchema),z.lazy(() => EnergiesToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema;
