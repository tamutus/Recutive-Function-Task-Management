import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutProjectsInputSchema } from './PersonCreateWithoutProjectsInputSchema';
import { PersonUncheckedCreateWithoutProjectsInputSchema } from './PersonUncheckedCreateWithoutProjectsInputSchema';

export const PersonCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutProjectsInputSchema;
