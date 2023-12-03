import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutTemplateInputSchema } from './TaskUpdateWithoutTemplateInputSchema';
import { TaskUncheckedUpdateWithoutTemplateInputSchema } from './TaskUncheckedUpdateWithoutTemplateInputSchema';

export const TaskUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutTemplateInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutTemplateInputSchema) ]),
}).strict();

export default TaskUpdateWithWhereUniqueWithoutTemplateInputSchema;
