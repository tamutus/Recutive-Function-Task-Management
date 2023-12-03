import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutProjectTemplatesInputSchema } from './PrivateTagUpdateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema;
