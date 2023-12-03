import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutTaskTagsInputSchema } from './PersonUpdateWithoutTaskTagsInputSchema';
import { PersonUncheckedUpdateWithoutTaskTagsInputSchema } from './PersonUncheckedUpdateWithoutTaskTagsInputSchema';

export const PersonUpdateToOneWithWhereWithoutTaskTagsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutTaskTagsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTaskTagsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutTaskTagsInputSchema;
