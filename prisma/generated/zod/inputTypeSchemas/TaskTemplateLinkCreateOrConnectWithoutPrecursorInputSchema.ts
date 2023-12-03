import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema';

export const TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkCreateOrConnectWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskTemplateLinkCreateOrConnectWithoutPrecursorInputSchema;
