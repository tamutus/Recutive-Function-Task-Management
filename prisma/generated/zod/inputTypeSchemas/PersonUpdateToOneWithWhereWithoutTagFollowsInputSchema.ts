import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutTagFollowsInputSchema } from './PersonUpdateWithoutTagFollowsInputSchema';
import { PersonUncheckedUpdateWithoutTagFollowsInputSchema } from './PersonUncheckedUpdateWithoutTagFollowsInputSchema';

export const PersonUpdateToOneWithWhereWithoutTagFollowsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutTagFollowsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTagFollowsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutTagFollowsInputSchema;
