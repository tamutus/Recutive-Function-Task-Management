import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesScalarWhereInputSchema } from './PrivateEnergiesToTaskTemplatesScalarWhereInputSchema';

export const PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesUncheckedUpdateManyWithoutTaskNestedInputSchema;
