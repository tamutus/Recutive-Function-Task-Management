import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema';
import { TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema';
import { TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema } from './TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';

export const TaskTemplateLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUncheckedCreateNestedManyWithoutPrecursorInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkCreateWithoutPrecursorInputSchema).array(),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskTemplateLinkCreateManyPrecursorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskTemplateLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema;
