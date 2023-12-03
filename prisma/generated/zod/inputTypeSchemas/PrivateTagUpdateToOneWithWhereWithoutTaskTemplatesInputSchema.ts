import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PrivateTagUpdateWithoutTaskTemplatesInputSchema } from './PrivateTagUpdateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const PrivateTagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateTagUpdateToOneWithWhereWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default PrivateTagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema;
