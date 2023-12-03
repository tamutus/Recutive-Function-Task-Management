import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutTemplateInputSchema } from './TaskUpdateWithoutTemplateInputSchema';
import { TaskUncheckedUpdateWithoutTemplateInputSchema } from './TaskUncheckedUpdateWithoutTemplateInputSchema';
import { TaskCreateWithoutTemplateInputSchema } from './TaskCreateWithoutTemplateInputSchema';
import { TaskUncheckedCreateWithoutTemplateInputSchema } from './TaskUncheckedCreateWithoutTemplateInputSchema';

export const TaskUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutTemplateInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutTemplateInputSchema),z.lazy(() => TaskUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default TaskUpsertWithWhereUniqueWithoutTemplateInputSchema;
