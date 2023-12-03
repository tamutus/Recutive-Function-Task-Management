import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';
import { EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesScalarWhereInputSchema } from './EnergiesToTaskTemplatesScalarWhereInputSchema';

export const EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema;
