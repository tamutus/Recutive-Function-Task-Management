import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';
import { TaskTemplateLinkUpdateWithoutSuccessorInputSchema } from './TaskTemplateLinkUpdateWithoutSuccessorInputSchema';
import { TaskTemplateLinkUncheckedUpdateWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedUpdateWithoutSuccessorInputSchema';
import { TaskTemplateLinkCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateWithoutSuccessorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema';

export const TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInput> = z.object({
  where: z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskTemplateLinkUpdateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedUpdateWithoutSuccessorInputSchema) ]),
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema) ]),
}).strict();

export default TaskTemplateLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema;
