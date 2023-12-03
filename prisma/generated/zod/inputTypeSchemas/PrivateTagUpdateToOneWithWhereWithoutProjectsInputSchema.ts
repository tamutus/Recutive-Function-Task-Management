import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutProjectsInputSchema } from './PrivateTagUpdateWithoutProjectsInputSchema';
import { PrivateTagUncheckedUpdateWithoutProjectsInputSchema } from './PrivateTagUncheckedUpdateWithoutProjectsInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutProjectsInputSchema;
