import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkUpdateWithoutPrecursorInputSchema } from './TaskTemplateLinkUpdateWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedUpdateWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedUpdateWithoutPrecursorInputSchema';
import { TaskTemplateLinkCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema';

export const TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskTemplateLinkUpdateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedUpdateWithoutPrecursorInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutPrecursorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutPrecursorInputSchema) ]),
}).strict();

export default TaskTemplateLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema;
