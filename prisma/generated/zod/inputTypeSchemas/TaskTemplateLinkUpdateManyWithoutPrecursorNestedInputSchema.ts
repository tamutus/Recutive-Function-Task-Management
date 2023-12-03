import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema';
import { TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema';
import { TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema } from './TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema';
import { TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema } from './TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema } from './TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema';
import { TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInputSchema } from './TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInputSchema';
import { TaskTemplateLinkScalarWhereInputSchema } from './TaskTemplateLinkScalarWhereInputSchema';

export const TaskTemplateLinkUpdateManyWithoutPrecursorNestedInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateManyWithoutPrecursorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkCreateWithoutPrecursorInputSchema).array(),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUpdateManyWithWhereWithoutPrecursorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskTemplateLinkScalarWhereInputSchema),z.lazy(() => TaskTemplateLinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskTemplateLinkUpdateManyWithoutPrecursorNestedInputSchema;
