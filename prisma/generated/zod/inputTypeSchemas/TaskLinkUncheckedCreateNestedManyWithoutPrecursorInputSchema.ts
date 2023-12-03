import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkCreateWithoutPrecursorInputSchema } from './TaskLinkCreateWithoutPrecursorInputSchema';
import { TaskLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskLinkUncheckedCreateWithoutPrecursorInputSchema';
import { TaskLinkCreateOrConnectWithoutPrecursorInputSchema } from './TaskLinkCreateOrConnectWithoutPrecursorInputSchema';
import { TaskLinkCreateManyPrecursorInputEnvelopeSchema } from './TaskLinkCreateManyPrecursorInputEnvelopeSchema';
import { TaskLinkWhereUniqueInputSchema } from './TaskLinkWhereUniqueInputSchema';

export const TaskLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkUncheckedCreateNestedManyWithoutPrecursorInput> = z.object({
  create: z.union([ z.lazy(() => TaskLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkCreateWithoutPrecursorInputSchema).array(),z.lazy(() => TaskLinkUncheckedCreateWithoutPrecursorInputSchema),z.lazy(() => TaskLinkUncheckedCreateWithoutPrecursorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskLinkCreateOrConnectWithoutPrecursorInputSchema),z.lazy(() => TaskLinkCreateOrConnectWithoutPrecursorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskLinkCreateManyPrecursorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskLinkWhereUniqueInputSchema),z.lazy(() => TaskLinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema;
