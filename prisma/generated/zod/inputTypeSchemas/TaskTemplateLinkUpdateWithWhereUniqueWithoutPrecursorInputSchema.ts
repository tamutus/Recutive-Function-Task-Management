import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkUpdateWithoutPrecursorInputSchema } from './TaskTemplateLinkUpdateWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedUpdateWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedUpdateWithoutPrecursorInputSchema';

export const TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskTemplateLinkUpdateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedUpdateWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskTemplateLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema;
