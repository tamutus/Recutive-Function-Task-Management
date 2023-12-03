import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateWithoutTaggerInputSchema } from './EnergiesToTagsCreateWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema';
import { EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema } from './EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema';
import { EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema } from './EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema';
import { EnergiesToTagsCreateManyTaggerInputEnvelopeSchema } from './EnergiesToTagsCreateManyTaggerInputEnvelopeSchema';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema } from './EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema';
import { EnergiesToTagsUpdateManyWithWhereWithoutTaggerInputSchema } from './EnergiesToTagsUpdateManyWithWhereWithoutTaggerInputSchema';
import { EnergiesToTagsScalarWhereInputSchema } from './EnergiesToTagsScalarWhereInputSchema';

export const EnergiesToTagsUpdateManyWithoutTaggerNestedInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyWithoutTaggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsCreateWithoutTaggerInputSchema).array(),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUpsertWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTagsCreateManyTaggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),z.lazy(() => EnergiesToTagsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUpdateWithWhereUniqueWithoutTaggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTagsUpdateManyWithWhereWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUpdateManyWithWhereWithoutTaggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTagsScalarWhereInputSchema),z.lazy(() => EnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTagsUpdateManyWithoutTaggerNestedInputSchema;
