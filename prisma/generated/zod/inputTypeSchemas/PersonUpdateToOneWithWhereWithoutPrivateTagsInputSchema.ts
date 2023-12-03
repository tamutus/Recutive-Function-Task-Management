import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutPrivateTagsInputSchema } from './PersonUpdateWithoutPrivateTagsInputSchema';
import { PersonUncheckedUpdateWithoutPrivateTagsInputSchema } from './PersonUncheckedUpdateWithoutPrivateTagsInputSchema';

export const PersonUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
