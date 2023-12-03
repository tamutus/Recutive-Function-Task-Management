import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutTasksInputSchema } from './PrivateTagUpdateWithoutTasksInputSchema';
import { PrivateTagUncheckedUpdateWithoutTasksInputSchema } from './PrivateTagUncheckedUpdateWithoutTasksInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutTasksInputSchema;
