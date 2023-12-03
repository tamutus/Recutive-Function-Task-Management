import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutProjectsInputSchema } from './PersonCreateWithoutProjectsInputSchema';
import { PersonUncheckedCreateWithoutProjectsInputSchema } from './PersonUncheckedCreateWithoutProjectsInputSchema';
import { PersonCreateOrConnectWithoutProjectsInputSchema } from './PersonCreateOrConnectWithoutProjectsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutProjectsInputSchema;
