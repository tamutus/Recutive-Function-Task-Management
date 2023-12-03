import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutProjectsInputSchema } from './PersonUpdateWithoutProjectsInputSchema';
import { PersonUncheckedUpdateWithoutProjectsInputSchema } from './PersonUncheckedUpdateWithoutProjectsInputSchema';

export const PersonUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutProjectsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutProjectsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutProjectsInputSchema;
